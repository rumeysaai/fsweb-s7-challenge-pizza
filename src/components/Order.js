import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { extras, foods } from '../utils/ingredients'
import { Form, FormGroup, Input, Label, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown, Button, ButtonGroup, ButtonToolbar, CardBody, CardTitle, CardText, FormFeedback } from "reactstrap";
import './Order.css';

const Order = ({ updateOrder }) => {
    const navigate = useNavigate();

    const orderSchema = Yup.object().shape({
        size: Yup
            .string()
            .required("You must choose the size"),
        crust: Yup
            .string()
            .required("You must choose the crust type"),
        extraStuff: Yup
            .array()
            .max(10, "You can select up to 10 material at a time")
            .default(0),
        note: Yup
            .string(),
        count: Yup
            .string()
            .required("You must add at least 1 product")
    })

    const [order, setOrder] = useState(foods[0]);
    const [errors, setErrors] = useState({
        size: "",
        crust: "",
        extraStuff: [],
        note: "",
        count: 1
    });
    const [disabledButton, setDisabledButton] = useState(true);
    const [extraPrice, setExtraPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(order.price);
    const [orderCounter, setOrderCounter] = useState(1);  //pizza adet

    const changeHandler = (e) => {
        const { type, checked, value, name } = e.target
        if (type === "checkbox") {
            Yup.reach(orderSchema, "extraStuff")
                .validate([...order.extraStuff, name])
                .then((valid) => {
                    setErrors({ ...errors, [name]: "" })
                    if (checked) {
                        console.log(" ******* yakaladı")
                        setOrder({ ...order, extraStuff: [...order.extraStuff, name] })
                    }
                })
                .catch(err => {
                    console.log(" ***** extraStuff ERR: > ", err)
                    setErrors({ ...errors, extraStuff: err.errors[0] })
                });

            if (!checked) {

                const ind = order.extraStuff.indexOf(name)
                const extraStuf = order.extraStuff;
                extraStuf.splice(ind, 1)

                setOrder({ ...order, extraStuff: extraStuf })
            }
        }
        else {
            Yup.reach(orderSchema, name)
                .validate(value)
                .then((valid) => {
                    setErrors({ ...errors, [name]: "" });
                    setOrder({ ...order, [name]: value });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors[0] })
                })
        }
    }

    const increaseCounter = (e) => {  // pizza adet artışı
        console.log(e.target.value)
        setOrderCounter(orderCounter + 1)

    }
    const decreaseCounter = (e) => {
        if (orderCounter >= 1)
            setOrderCounter(orderCounter - 1)
        if (orderCounter <= 0)
            setOrderCounter(0)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        orderSchema.isValid(order)
            .then((valid) => {
                setDisabledButton(!valid)
                navigate("/confirmation");
                //buton disabled kontrol edilmeli

                updateOrder(order);
                axios.post("https://reqres.in/api/orders", order)
                    .then((res) => {
                        console.log("reqres aşağıdaki");
                        console.log(res.data);
                    })
            });

    }

    useEffect(() => {
        orderSchema.isValid(order)
            .then((valid) => {
                setDisabledButton(!valid)
                setTotalPrice(((order.price) + ((order.extraStuff.length) * 5)) * orderCounter);
                setExtraPrice(((order.extraStuff.length) * 5) * orderCounter);
            });
        console.log(order)
    }, [order, extraPrice, totalPrice, errors, orderCounter]);

    return (
        <div className="food-content">
            <div className="absolut">
                <div className="food-info">
                    <h3>{order.name}</h3>
                    <div className="info-details">
                        <b >{order.price}₺</b>
                        <div className="comments-rate">
                            <p className="acikgri">{order.rate}</p>
                            <p className="acikgri">({order.comments})</p>
                        </div>
                    </div>
                    <p className="acikgri">{order.description}</p>
                </div>
            </div>
            <Form onSubmit={submitHandler}
                data-cy="formSubmit">
                <div className="preferences">
                    <div className="part1">
                        <h4>Boyut Seç</h4>
                        <FormFeedback>{errors.size}</FormFeedback>
                        <FormGroup check>
                            <Input
                                name="size"
                                id="size-small"
                                type="radio"
                                onChange={changeHandler}
                                value={"Küçük"}
                                data-cy="crust-small"
                            />
                            {' '}
                            <Label
                                for="size-small"
                                check>
                                Küçük
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="size"
                                id="size-medium"
                                type="radio"
                                onChange={changeHandler}
                                value={"Orta"}
                                data-cy="size-medium"
                            />
                            {' '}
                            <Label check
                                for="size-medium">
                                Orta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="size"
                                id="size-large"
                                type="radio"
                                onChange={changeHandler}
                                value={"Büyük"}
                                data-cy="crust-large"
                            />
                            {' '}
                            <Label check
                                for="size-large">
                                Büyük
                            </Label>
                        </FormGroup>
                    </div>
                    <div className="part2">
                        <h4>Hamur Seç</h4>
                        <FormFeedback>{errors.crust}</FormFeedback>
                        <UncontrolledDropdown className="crust">
                            <DropdownToggle
                                caret
                                color="light"
                                data-cy="crust"
                            >
                                Hamur Kalınlığı
                            </DropdownToggle>
                            <DropdownMenu aria-hidden="false" className="crust-normal" light>
                                <DropdownItem
                                    for="crust"
                                    className="crust-normal"
                                    type="select"
                                    id="crust"
                                    name="crust"
                                    value="Normal"
                                    onClick={changeHandler}
                                    invalid={errors.crust}
                                    data-cy="crust-normal"
                                >
                                    Normal
                                </DropdownItem>
                                <DropdownItem
                                    for="crust"
                                    type="select"
                                    id="crust"
                                    name="crust"
                                    value="İnce"
                                    onClick={changeHandler}
                                    invalid={errors.crust}
                                    data-cy="crust-ince"
                                >
                                    İnce
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className="part3">
                    <h4>Ek Malzemeler</h4>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="additionals">
                        {extras.map((e, i) => {
                            return (<FormGroup
                                check
                                key={i}
                                inline
                            >
                                <div className="items">
                                    <Input

                                        type="checkbox"
                                        name={e}
                                        id={`custom-checkbox-${e.i}`}
                                        onChange={changeHandler}
                                        checked={order.extraStuff.indexOf(e) > -1}
                                    />
                                    {' '}
                                    <Label check
                                    >
                                        {e}
                                    </Label>
                                </div>

                            </FormGroup>
                            )
                        })}
                    </div>
                    {/* <FormFeedback>{errors.extraStuff}</FormFeedback> */}
                    {errors.extraStuff && <span className="text-danger"><br></br>{errors.extraStuff}</span>}
                </div>
                <div className="note">
                    <FormGroup>
                        <Label for="exampleText">
                            <h4>Sipariş Notu</h4>
                        </Label>
                        <Input
                            id="note"
                            name="note"
                            type="text"
                            onChange={changeHandler}
                            value={order.note}
                            invalid={errors.note}
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                        />
                    </FormGroup>
                </div>
                <div className="summary">
                    <div className="counter">
                        <ButtonToolbar>
                            <ButtonGroup className="me-2">
                                <Button
                                    onClick={decreaseCounter}
                                    color="warning"
                                >
                                    -
                                </Button>
                                <Input
                                    type="number"
                                    width="5px"
                                    value={orderCounter} />
                                <Button
                                    color="warning"
                                    onClick={increaseCounter}
                                >
                                    +
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    <div className="total-price">
                        <CardBody>
                            <CardTitle tag="h5">
                                <h4 className="toplam-header">Sipariş Toplamı</h4>
                            </CardTitle>
                            <CardText className="secim-summary">
                                <h6 >Seçimler</h6>
                                <h6>{order.extraPrice = extraPrice} ₺</h6>
                            </CardText>
                            <CardText className="total-summary">
                                <h6>Toplam</h6>
                                <h6>{order.totalPrice = totalPrice} ₺</h6>
                            </CardText>
                            <Button disabled={disabledButton} type="submit" color="warning" >
                                SİPARİŞ VER
                            </Button>
                        </CardBody>
                    </div>
                </div>
            </Form>
        </div>

    )
}
export default Order;