"use client"
import { useEffect, useState } from "react"

// Component สำหรับดึงข้อมูล Todo
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        const fetchTodo = async () => {
            const res = await fetch(url);
            const data = await res.json();
            // ดึงมาแค่ 10 รายการ
            setTodos(data.slice(0, 10));
        };
        fetchTodo();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>📌 Todo List</h2>
            <ul>
                {todos.map((todo: any) => (
                    <li key={todo.id}>
                        {todo.completed ? "✅ " : "❌ "}
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Component สำหรับดึงข้อมูล User
const User = () => {
    const [users, setUsers] = useState([])
    // ลบ &quot; ที่เกินมาออกแล้ว
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(url);
            const data = await res.json()
            setUsers(data);
        };
        fetchUser();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>👥 User List</h2>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

const UserPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Assignment</h1>
        <User />
        <hr />
        <Todo />
    </div>
  )
}
export default UserPage