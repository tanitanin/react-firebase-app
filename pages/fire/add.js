import {useState, useEffect} from 'react'
import Layout from '../../components/layout'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import 'firebase/firestore'
import { useRouter } from 'next/router'
import '../../components/fire'

const db = getFirestore()

export default function Add() {
  const [message, setMessage] = useState('add data')
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [age, setAge] = useState(0)
  const router = useRouter()

  const onChangeName = ((e)=> {
    setName(e.target.value)
  })
  const onChangeMail = ((e)=> {
    setMail(e.target.value)
  })
  const onChangeAge = ((e)=> {
    setAge(e.target.value)
  })

 const doAction = ((e)=> {
    const ob = {
      name:name,
      mail:mail,
      age:age
    }
    const accessDB = async () => {
      const docRef = await addDoc(collection(db,'mydata'),ob)
      router.push('/fire')
    }
    accessDB()
  })

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{message}</h5>
        <div className="text-left">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" onChange={onChangeName}
              className="form-control" />
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input type="text" onChange={onChangeMail}
              className="form-control" />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" onChange={onChangeAge}
              className="form-control" />
          </div>
        </div>
        <button onClick={doAction} className="btn btn-primary">
          Add
        </button>
      </div>
      </Layout>
    </div>
  )
}