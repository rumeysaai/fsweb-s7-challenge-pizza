import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Form, FormGroup, Input, Label, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown, Button, ButtonGroup, ButtonToolbar, CardBody, CardTitle, CardText } from "reactstrap";
import './Order.css';
const Order = () => {
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
    const [errors, setErrors] = useState({
        name: "",
        price: 88,
        size: "",
        crust: "",
        extraStuff: [],
        note: "",
        count: 1,
        rate: 8.9,
        comments: 256,
        description: "Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt. "
    });

    const [disabledButton, setDisabledButton] = useState(true);

    const extras = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Jalepeno",
        "Sarımsak",
        "Biber",
        "Sucuk",
        "Ananas",
        "Kabak"
    ]
    const [order, setOrder] = useState({
        name: "Pesto Pizza",
        price: 100,
        size: "",
        crust: "",
        extraStuff: [],
        note: "",
        count: 1,
        rate: 8.9,
        comments: 256,
        description: "Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt. "
    });

    const changeHandler = (e) => {
        const { name, value } = e.target
        Yup.reach(orderSchema, name)
            .validate(value)
            .then((valid) => {
                setErrors({ ...errors, [name]: "" });
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors[0] })
            })

        setOrder({ ...order, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/orders", order)
            .then((res) => {
                console.log(res.data);
            })
    }

    const [extraPrice, setExtraPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(order.price);

    const checkChangeHandler = (e) => {

        const checke = e.target.checked;

        Yup.reach(orderSchema, "extraStuff")
            .validate([...order.extraStuff, e.target.name])
            .then((valid) => {
                setErrors({ ...errors, [e.target.name]: "" })
                if (checke) {
                    console.log(" ******* yakaladı")
                    setOrder({ ...order, extraStuff: [...order.extraStuff, e.target.name] })
                     setTotalPrice(((order.price) + ((order.extraStuff.length) * 5)) * orderCounter);
                     setExtraPrice(((order.extraStuff.length) * 5) * orderCounter);
                }


            })
            .catch(err => {
                setErrors({ ...errors, [e.target.name]: "" })
                console.log(" ***** extraStuff ERR: > ", err)
            });

        if (!checke){
            const ind = order.extraStuff.indexOf(e.target.name)
            setOrder({
                ...order, extraStuff:
                    order.extraStuff.splice(ind, 1)
            })
            setTotalPrice(((order.price) + ((order.extraStuff.length) * 5)) * orderCounter);
            setExtraPrice(((order.extraStuff.length) * 5) * orderCounter);
        }
    }

    const [orderCounter, setOrderCounter] = useState(1);

    const increaseCounter = (e) => {
        console.log(e.target.value)
        setOrderCounter(orderCounter + 1)

    }
    const decreaseCounter = (e) => {
        if (orderCounter >= 1)
            setOrderCounter(orderCounter - 1)
        if (orderCounter <= 0)
            setOrderCounter(0)
    }


    useEffect(() => {
        orderSchema.isValid(order)
            .then((valid) => setDisabledButton(!valid));
    }, [order]);
    useEffect(() => {
        console.log(order)
    }, [orderCounter, totalPrice]);


    return (

        <div className="food-content">
            <div className="food-info">
                <h3>{order.name}</h3>
                <div className="reverse-rows">
                <b >{order.price}₺</b>
                <p className="acikgri">{order.rate}</p>
                <p className="acikgri">({order.comments})</p>
                </div>
                <p className="acikgri">{order.description}</p>
            </div>
            <Form onSubmit={submitHandler}>
                <div className="preferences">
                    <div className="part1">
                        <h4>Boyut Seç</h4>
                        <FormGroup check>
                            <Input
                                name="size"
                                id="size"
                                type="radio"
                                onChange={changeHandler}
                                value={"Küçük"}
                            />
                            {' '}
                            <Label check>
                                Küçük
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="size"
                                id="size"
                                type="radio"
                                onChange={changeHandler}
                                value={"Orta"}
                            />
                            {' '}
                            <Label check>
                                Orta
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="size"
                                id="size"
                                type="radio"
                                onChange={changeHandler}
                                value={"Büyük"}
                            />
                            {' '}
                            <Label check>
                                Büyük
                            </Label>
                        </FormGroup>
                    </div>
                    <div className="part2">
                        <h4>Hamur Seç</h4>
                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="light"
                            >
                                Hamur Kalınlığı
                            </DropdownToggle>
                            <DropdownMenu light>
                                <DropdownItem
                                    type="select"
                                    id="crust"
                                    name="crust"
                                    value="Normal"
                                    onClick={changeHandler}
                                    invalid={errors.crust}
                                >
                                    Normal
                                </DropdownItem>
                                <DropdownItem
                                    type="select"
                                    id="crust"
                                    name="crust"
                                    value="İnce"
                                    onClick={changeHandler}
                                    invalid={errors.crust}
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
                    {extras.map((e, i) => {
                        return (<FormGroup
                            check
                            key={i}
                            inline
                        >
                            <Input
                                type="checkbox"
                                name={e}
                                id={`custom-checkbox-${e.i}`}
                                onChange={checkChangeHandler}
                                checked={order.extraStuff.indexOf(e) > -1}
                                value={e.checked}
                            />
                            {' '}
                            <Label check>
                                {e}
                            </Label>
                        </FormGroup>)
                    })}


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
                                <Input type="number" value={orderCounter} width="5px" />
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
                                <h4>Sipariş Toplamı</h4>
                            </CardTitle>
                            <CardText className="secim acikgri">
                                <h6 >Seçimler</h6>
                                <h6>{extraPrice}₺</h6>
                            </CardText>
                            <CardText className="total">
                                <h6>Toplam</h6>
                                <h6>{totalPrice}₺</h6>
                            </CardText>
                            <Button disabled={disabledButton} type="submit" color="warning" onClick={() => navigate("/confirmation")}>
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