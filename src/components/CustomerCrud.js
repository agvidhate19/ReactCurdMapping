import axios from "axios";
import { useEffect, useState } from "react";
function CustomerCrud() {
const [id, setId] = useState("");
const [fname, setFName] = useState("");
const [lname, setLname] = useState("");
const [Email, setEmail] = useState("");
const [Phoneno, setPhoneno] = useState("");
const [Country, setCountry] = useState("");
const [gender, setGender] = useState("");
const [balance, setbalance] = useState("");
const [Customer, setUsers] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    
    const result = await axios.get("https://localhost:7113/api/Customer/GetCustomer");
    setUsers(result.data);
    console.log(result.data);
  }
 
  async function save(event) {
   
    event.preventDefault();
    try {
      await axios.post("https://localhost:7113/api/Customer/AddCustomer", {        
       
        fname:fname,
        lname:lname,
        Email:Email,
        Phoneno:Phoneno,
        Country:Country,
        gender:gender,
        balance:balance,
       
      });
      alert("Customer Registation Successfully");
          setId("");
          setFName("");
          setLname("");
          setEmail("");
          setPhoneno("");
          setCountry("");
          setGender("");
          setbalance("");
       
     
      Load();
    } catch (err) {
      alert(err);
    }
  }
  async function editCustomer(Customer) {
    setfName(Customer.fname);
    setLname(Customer.lname);
    setEmail(Customer.Email);
    setPhoneno(Customer.Phoneno);
    setCountry(Customer.Country);
    setGender(Customer.gender);
    setbalance(Customer.balance); 
    setId(Customer.id);
  }
 
  async function DeleteStudent(id) {
  await axios.delete("https://localhost:7113/api/customer/DeleteCustomer/" + id);
   alert("Customer deleted Successfully");
   setId("");
   setLname("");
   setEmail("");
   setPhoneno("");
   setCountry("");
   setGender("");
   setbalance("");
   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
  await axios.patch("https://localhost:7113/api/Customer/UpdateCustomer/"+ Customer.find((u) => u.id === id).id || id,
        {
        id: id,
        fname:fname,
        lname:lname,
        Email:Email,
        Phoneno:Phoneno,
        Country:Country,
        gender:gender,
        balance:balance,
        }
      );
      alert("Registation Updated");
      setId("");
      setLname("");
      setEmail("");
      setPhoneno("");
      setCountry("");
      setGender("");
      setbalance("");
     
      Load();
    } catch (err) {
      alert(err);
    }
  }
    return (
      <div>
        <h1>Customer Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
           
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>FirstName</label>
            <input
              type="text"
              class="form-control"
              id="fname"
              value={fname}
              onChange={(event) => {
                setFName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>LastName</label>
            <input
              type="text"
              class="form-control"
              id="lname"
              value={lname}
              onChange={(event) => {
                setLname(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              id="Email"
              value={Email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Phoneno</label>
            <input
              type="text"
              class="form-control"
              id="Phoneno"
              value={Phoneno}
              onChange={(event) => {
                setPhoneno(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>CountryCode</label>
            <input
              type="text"
              class="form-control"
              id="Country"
              value={Country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Gender</label>
            <input
              type="text"
              class="form-control"
              id="gender"
              value={gender}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Balance</label>
            <input
              type="text"
              class="form-control"
              id="balance"
              value={balance}
              onChange={(event) => {
                setbalance(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Customer Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Country code</th>
            <th scope="col">Gender</th>
            <th scope="col">Balance</th>
            
         
 
            <th scope="col">Option</th>
          </tr>
        </thead>
        {Customer.map(function fn(Customer) {
          return (
            <tbody>
              <tr>
                <th scope="row">{Customer.id} </th>
                <td>{Customer.fname}</td>
                <td>{Customer.lname}</td>
                <td>{Customer.Email}</td>
                <td>{Customer.Phoneno}</td>
                <td>{Customer.Country}</td>
                <td>{Customer.gender}</td>
                <td>{Customer.balance}</td>
                
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editCustomer(Customer)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteCustomer(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
        
      </div>
    );
  }
  
  export default CustomerCrud;