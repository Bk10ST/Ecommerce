import "./Dash.css";
import { useCreateProduct } from "./useCreate";

export const Dashboard = () => {
  const { addProduct, handleProducts, formvalues, convertToBase64 } =
    useCreateProduct();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="text-center">Products</h1>

        <div className="form-field">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Add item +
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <form action="">
                    <label>Product Name :</label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      onChange={(e) => handleProducts(e)}
                      value={formvalues.productName}
                      name="productName"
                    />
                    <label>Last Name :</label>
                    <input
                      type="text"
                      placeholder="Enter Your product category"
                      onChange={(e) => handleProducts(e)}
                      value={formvalues.productCategory}
                      name="productCategory"
                    />
                    <label>Email :</label>
                    <input
                      type="text"
                      placeholder="Enter Your amount"
                      onChange={(e) => handleProducts(e)}
                      value={formvalues.amount}
                      name="amount"
                    />
                    <input
                      type="file"
                      onChange={convertToBase64}
                      accept="image/*"
                      name="image"
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={addProduct}
                    >
                      Save
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={handleClear}
                    >
                      Clear
                    </button> */}
                    {/* 
                    {!isUpdate ? (
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                    )} */}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <table className="table">
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
          {/* {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.caste}</td>
              <td>{item.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};
