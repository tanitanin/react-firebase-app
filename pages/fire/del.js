import {useState, useEffect} from 'react'
import Layout from '../../components/layout'
import { getFirestore, doc, getDoc, deleteDoc } from 'firebase/firestore';
import 'firebase/firestore'
import { useRouter } from 'next/router'
import '../../components/fire'

const db = getFirestore()

export default function Delete(props) {
  const [message, setMessage] = useState('wait.')
  const [data, setData] = useState(null)
  const router = useRouter()

  // If enabled CSR(automatically statically optimization),
  // router.query.xxx is equal to undefined first time.
  // Should only be used inside of useEffect methods and not for SSR.
  useEffect(() => {
    if (!router.isReady) { return }
    if (router.query.id != undefined) {
      setMessage('Delete id = ' + router.query.id )
      const accessDB = async () => {
        const docRef = doc(db, 'mydata', router.query.id)
        const docSnapshot = await getDoc(docRef)
        setData(docSnapshot.data())
      }
      accessDB()
    } else {
      setMessage(message + '.')
    }
  }, [router.isReady, message])

  const doAction = (e)=> {
    const accessDB = async () => {
      const docRef = doc(db, 'mydata', router.query.id)
      const docSnapshot = await deleteDoc(docRef)
      router.push('/fire')
    }
    accessDB()
  }

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <pre className="card p-3 m-3 h5 text-left">
          Name: {data != null ? data.name : '...'}<br/>
          Mail: {data != null ? data.mail : '...'}<br/>
          Age: {data != null ? data.age : '...'}
        </pre>
        <button onClick={doAction} className="btn btn-primary">
          Delete
        </button>
      </div>
      </Layout>
    </div>
  )
}