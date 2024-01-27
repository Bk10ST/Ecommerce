import { useEffect, useState } from "react"
import { ProductData } from "./Data"


export const AdminDashboard = () => {

    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        setData(ProductData);

    }, [])
    const handleEdit = (id) => {
        const dt = data.filter(item => item.id === id);
        if (dt !== undefined) {
            setIsUpdate(true)
            setId(id);
            setFirstName(dt[0].firstName);
            setLastName(dt[0].lastName);
        }
    }
    const handleDelete = (id) => {

        if (id > 0) {
            if (window.confirm('Are you sure you want to delete ?')) {
                const deleteData = data.filter(item => item.id !== id);
                setData(deleteData);
            }
        }
    }
    const handleSave = (e) => {
        let error = ''
        if (firstName === '')
            error += 'FirstName is required ,'
        if (lastName === '')
            error += 'LastName is required .'
        if (error === '') {
            e.preventDefault();
            const dt = [...data];
            const newObj = {
                id: ProductData.length + 1,
                name: firstName,
                caste: lastName,
                email: email,
                age: age,
            }
            dt.push(newObj)
            setData(dt)
        }
        else {
            alert(error)
        }

    }
    const handleUpdate = () => {
        const index = data.map((item) => item.id).indexOf(id);

        const dt = [...data];
        dt[index].firstName = firstName;
        dt[index].lastName = lastName;
        setData(dt);
        handleClear();


    }
    const handleClear = () => {
        setFirstName('')
        setLastName('')
        setIsUpdate(false)
    }

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <label>First Name :</label>
                    <input type="text" placeholder="Enter Your First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    <label >Last Name :</label>
                    <input type="text" placeholder="Enter Your Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    <button type="button" className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
                </div>
                <div>
                    {
                        !isUpdate ?
                            <button type="button" className="btn btn-primary" onClick={(e) => handleSave(e)}>Save</button>
                            :
                            <button type="button" className="btn btn-danger mx-2" onClick={handleUpdate}>Update</button>
                    }
                </div>
            </div>

            <h1 className="text-center">Products</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name </th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.caste}</td>
                            <td>{item.email}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                                <button type="button" className="btn btn-danger mx-2" onClick={() => handleDelete(item.id)}>Delete</button>

                            </td>
                        </tr>
                    ))}

                    <tr>

                    </tr>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </>
    )
}