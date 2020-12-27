import React, { useState } from "react";

import bg from "../assets/images/index.jpg";
import lg from "../assets/images/pln.png";
import lg1 from "../assets/images/bumn.jpg";
import { Form, Button } from "react-bootstrap";

import ToastMessage from "../components/ToastMessage";

const Login = () => {
  const [account, setAccount] = useState({
    nip: "",
    password: "",
  });

  const { nip, password } = account;

  const handleChange = (key) => (event) => {
    setAccount({ ...account, [key]: event.target.value });
  };

  const onSubmit = () => {
    alert(nip + password);
  };

  const [show, setShow] = useState(false);

  const toggleToast = () => {
    setShow(!show);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifySelf: "flex-start",
          justifyContent: "center",
          alignContent: "space-between",
          flexDirection: "row",
          padding: 20,
        }}
      >
        <img src={lg} width={50} alt="icon" style={{ float: "right" }} />
        <img src={lg1} height={50} alt="icon" style={{ float: "left" }} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            filter: "drop-shadow(0 0 0.75rem black)",
          }}
        >
          <Form>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: 30,
              }}
            >
              loGiN
            </h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>NIP</Form.Label>
              <Form.Control
                type="text"
                placeholder="NIP"
                onChange={handleChange("nip")}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange("password")}
              />
            </Form.Group>
          </Form>

          <span
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <Button variant="primary" type="submit" onClick={onSubmit}>
              Submit
            </Button>
            <Button variant="info" type="submit" onClick={toggleToast}>
              Bantuan
            </Button>
          </span>
        </div>
      </div>

      <ToastMessage
        title="Bantuan Masuk"
        show={show}
        toggleToast={toggleToast}
        style={{
          alignSelf: "flex-end",
          margin: 20,
          justifySelf: "flex-end",
        }}
      >
        <p>
          Untuk login sebagai User(Pegawai), masukkan NIP dan Password, dimana
          password merupakan gabungan antara NIP dan Tanggal Lahir. <br />{" "}
          Contoh : NIP (1162001040), Tanggal Lahir (02071970) <br />{" "}
          <b> NIP : 1162001040 </b>
          <br /> <b> Password: 116200104002071979</b>
        </p>
      </ToastMessage>
    </div>
  );
};

export default Login;
