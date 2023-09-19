// Import necessary components 
import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs,setDoc, doc, updateDoc, serverTimestamp, getDoc, } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState("") // Input name for username search 
  const [user, setUser] = useState(null) // Stores the user data after searching
  const [err, setErr] = useState(false) // Handles errors

  // Accessing current user 
  const {currentUser} = useContext(AuthContext)

  // User search function
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // Storing the found user's data
        setUser(doc.data())
      });
    } catch (err) {
      // Handles errors
        setErr(true)
    }
  }

  // Key press function
  const handleKey = e =>{
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async() => {
    //check whether group exists or not, if not create new one
    const convoID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    try { 
      const res = await getDoc(doc(db, "chats", convoID));
      
      
      if (!res.exists()){
        // Creating a new chat document 
        await setDoc(doc(db, "chats", convoID), { messages: [] })
        // Updates current user's chat collection
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [convoID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [convoID + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [convoID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [convoID + ".date"]: serverTimestamp(),
        });
      }
    } 
      // Clears the user data and input field 
    catch (err) {}
    setUser(null)
    setUsername("")
  }

  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Search' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username}/>
        
      </div>
      {err && <span>User not found!</span>}
      {user && <div className='userChat' onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search
