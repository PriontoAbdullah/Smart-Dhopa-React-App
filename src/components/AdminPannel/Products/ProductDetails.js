import { faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Table } from 'reactstrap';
import { DataContext } from '../../../App';
import '../Orders/Orders.css';
import './Product.css';

const ProductDetails = (props) => {
	const ContextData = useContext(DataContext);
	const [ selectProduct, setSelectProduct ] = useState(null);
	const [ editModalIsOpen, setEditModalIsOpen ] = useState(false);
	const [ deleteModal, setDeleteModal ] = useState(false);

	const { register, handleSubmit, watch, errors } = useForm();

	const openDataEditModal = (pdId) => {
		setEditModalIsOpen(true);
		const selectedPd = ContextData.products.find((pd) => pd._id === pdId);
		setSelectProduct(selectedPd);
	};

	const openDataDeleteModal = (pdId) => {
		setDeleteModal(true);
		const selectedPd = ContextData.products.find((pd) => pd._id === pdId);
		setSelectProduct(selectedPd);
	};

	let count = 0;

	const handleClose = () => {
		props.closeModal();
	};

	const handleUpdateModal = () => {
		props.updateModal();
	};

	const handleDeleteProduct = () => {
		const id = selectProduct._id;
		// Delete product from database
		fetch(`https://smart-dhopa-server.herokuapp.com/deleteProducts/${id}`, {
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('Deleted successfully');
			})
			.catch((err) => console.log(err));

		setDeleteModal(false);
		window.location.reload();
	};

	const onProductSubmit = (data, e) => {
		const id = Math.round(Math.random() * 10000 + 369) + '';
		const ac = 'd-block';
		const dc = 'd-none';
		const service = props.viewProduct[0].service;
		const category = props.viewProduct[0].category;
		const quantity = 1;

		const newProduct = {
			id,
			ac,
			dc,
			name: data.name,
			category,
			service,
			subservice: data.subservice,
			description: data.description,
			price: parseInt(data.price),
			quantity
		};

		console.log(newProduct);
		e.target.reset();

		// Storing Data To Database
		fetch('https://smart-dhopa-server.herokuapp.com/addProducts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newProduct)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));

		window.location.reload();
	};

	const onSubmit = (data) => {
		const updateData = {
			name: data.name,
			price: parseInt(data.price),
			id: data.id,
			subservice: data.subservice,
			description: data.description
		};

		// Updating Data to DataContext
		const newDataArray = Array.from(ContextData.products);
		const selectedIndex = newDataArray.indexOf(selectProduct);

		const SelectedPdForModify = { ...selectProduct };

		SelectedPdForModify.name = data.name;
		SelectedPdForModify.price = parseInt(data.price);
		SelectedPdForModify.subservice = data.subservice;
		setSelectProduct(SelectedPdForModify);
		newDataArray.splice(selectedIndex, 1, SelectedPdForModify);
		ContextData.setProducts(newDataArray);

		// Storing Data to Database

		fetch('https://smart-dhopa-server.herokuapp.com/updateProduct', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updateData)
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
		setEditModalIsOpen(false);
		handleClose();
	};

	return (
		<div className="p-5 single-order">
			<div className="d-flex justify-content-between ">
				<h3 className="text-info">
					Product Information of
					<span className="text-danger ml-3">
						{props.viewProduct[0].service} - {props.viewProduct[0].category}
					</span>
				</h3>
				<button className="btn peach-gradient px-3 closeButton" onClick={handleClose}>
					X
				</button>
			</div>

			<form className="row add-product" onSubmit={handleSubmit(onProductSubmit)}>
				<div className="form-group col-md-6">
					<input
						type="text"
						placeholder="Product Name"
						ref={register({ required: true })}
						name="name"
						className="form-control modifyForm "
					/>
					<div className="">
						{errors.name && (
							<span className="text-danger">
								Product name must not empty ! <br />
							</span>
						)}
					</div>
				</div>

				{props.viewProduct[0].service == 'Emergency Service' && (
					<div className="form-group col-md-4">
						<input
							type="text"
							placeholder="Product Sub-service"
							ref={register({ required: true })}
							name="subservice"
							className="form-control modifyForm"
						/>
						<div className="">
							{errors.subservice && (
								<span className="text-danger">
									Product sub-service must not empty ! <br />
								</span>
							)}
						</div>
					</div>
				)}

				<div className="form-group col-md-4">
					<input
						type="text"
						placeholder="Product Price"
						ref={register({ required: true })}
						name="price"
						className="form-control modifyForm"
					/>
					<div className="">
						{errors.price && (
							<span className="text-danger">
								Product price must not empty ! <br />
							</span>
						)}
					</div>
				</div>

				{props.viewProduct[0].service == 'Subscription' && (
					<div className="form-group col-md-6">
						<input
							type="text"
							placeholder="Product Package"
							ref={register({ required: true })}
							name="description"
							className="form-control modifyForm"
						/>
						<div className="">
							{errors.description && (
								<span className="text-danger">
									Product package must not empty ! <br />
								</span>
							)}
						</div>
					</div>
				)}

				<div className="col-md-2">
					<button type="submit" className="btn btn-info mt-0">
						<FontAwesomeIcon icon={faPlus} /> Add
					</button>
				</div>
			</form>

			<Table>
				<thead className="mt-5">
					<tr>
						<th>#</th>
						<th>Product Name</th>
						{props.viewProduct[0].service == 'Subscription' && <th>Package</th>}
						<th>Price</th>
						{props.viewProduct[0].service == 'Emergency Service' && <th>Service</th>}
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{props.viewProduct.map((item) => (
						<tr key={item.id}>
							<th scope="row">{(count = count + 1)}</th>

							<td>{item.name}</td>
							{props.viewProduct[0].service == 'Subscription' && <td>{item.description}</td>}
							<td>৳ {item.price}</td>
							{props.viewProduct[0].service == 'Emergency Service' && <td>{item.subservice}</td>}
							<td>
								<button
									onClick={() => openDataEditModal(item._id)}
									className="mt-0 p-2 btn btn-warning text-white"
								>
									<FontAwesomeIcon icon={faPencilAlt} />
								</button>
								<button
									className="mt-0 p-2 ml-2 btn btn-danger text-white"
									onClick={() => openDataDeleteModal(item._id)}
								>
									<FontAwesomeIcon icon={faTrashAlt} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal isOpen={editModalIsOpen}>
				{selectProduct && (
					<form className="px-5 my-3" onSubmit={handleSubmit(onSubmit)}>
						<h5 className="text-secondary text-center mb-5">
							{selectProduct.service} - {selectProduct.category}
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={() => setEditModalIsOpen(false)}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</h5>
						<div className="form-group row">
							<label htmlFor="" className="col-4 modifyForm mt-2">
								Product Name
							</label>
							<input
								type="text"
								defaultValue={selectProduct.name}
								ref={register({ required: true })}
								name="name"
								className="form-control modifyForm col-8"
							/>
							<div className="col-12">
								{errors.name && (
									<span className="text-danger">
										Product name must not empty ! <br />
									</span>
								)}
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="" className="col-4 modifyForm mt-2">
								Product Price
							</label>
							<input
								type="text"
								defaultValue={selectProduct.price}
								ref={register({ required: true })}
								name="price"
								className="form-control modifyForm col-8"
							/>
							<div className="col-12">
								{errors.price && (
									<span className="text-danger">
										Product price must not empty ! <br />
									</span>
								)}
							</div>
						</div>

						{selectProduct.service == 'Emergency Service' && (
							<div className="form-group row">
								<label htmlFor="" className="col-4 modifyForm mt-2">
									Product service
								</label>
								<input
									type="text"
									defaultValue={selectProduct.subservice}
									ref={register({ required: true })}
									name="subservice"
									className="form-control modifyForm col-8"
								/>
								<div className="col-12">
									{errors.subservice && (
										<span className="text-danger">
											Product sub service must not empty ! <br />
										</span>
									)}
								</div>
							</div>
						)}

						{selectProduct.service == 'Subscription' && (
							<div className="form-group row">
								<label htmlFor="" className="col-4 modifyForm mt-2">
									Product package
								</label>
								<input
									type="text"
									defaultValue={selectProduct.description}
									ref={register({ required: true })}
									name="description"
									className="form-control modifyForm col-8"
								/>
								<div className="col-12">
									{errors.description && (
										<span className="text-danger">
											Product package must not empty ! <br />
										</span>
									)}
								</div>
							</div>
						)}

						<div className="form-group text-right">
							<input
								type="hidden"
								value={selectProduct._id}
								ref={register({ required: true })}
								name="id"
							/>
							<button type="submit" className="btn btn-primary">
								Update
							</button>
						</div>
					</form>
				)}
			</Modal>

			<Modal toggle={() => setDeleteModal(false)} isOpen={deleteModal}>
				<h4 className="modal-title text-danger ml-4">Are you want to delete this product?</h4>

				<div className="modal-footer mt-3">
					<Button color="warning" type="button" onClick={() => setDeleteModal(false)}>
						Close
					</Button>
					<Button color="danger" type="button" onClick={handleDeleteProduct}>
						Confirm
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default ProductDetails;
