import React, { Component } from "react";
import "./Ex5_SS16.css";

interface Submitted {
  name: string;
  email: string;
  age: number;
}

interface StateType {
  name: string;
  email: string;
  age: number;
  errorMsg: string;
  submitted: Submitted | null;
}

export default class Ex5_SS16 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: 0,
      errorMsg: "",
      submitted: null,
    };
  }

  checkValid = (): number => {
    const { name, email, age } = this.state;
    if (name.trim() === "" || email.trim() === "" || age === 0) return 0;
    if (!email.includes("@")) return 1;
    if (age < 0 || age > 120) return 2;
    return -1;
  };

  handleChange =
    (key: "name" | "email" | "age") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (key === "age") {
        this.setState({ age: value === "" ? 0 : Number(value) });
      } else {
        this.setState({ [key]: value } as Pick<StateType, keyof StateType>);
      }
    };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = this.checkValid();

    const mapMsg: Record<number, string> = {
      0: "Vui lòng nhập đầy đủ tên, email và tuổi",
      1: "Email không hợp lệ",
      2: "Không được âm",
      [-1]: "",
    };

    if (code === -1) {
      const { name, email, age } = this.state;
      this.setState({
        errorMsg: "",
        submitted: { name: name.trim(), email: email.trim(), age },
      });
    } else {
      this.setState({ errorMsg: mapMsg[code], submitted: null });
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: 0,
      errorMsg: "",
      submitted: null,
    });
  };

  render() {
    const { name, email, age, errorMsg, submitted } = this.state;

    return (
      <div className="form-container">
        <h2>Nhập thông tin người dùng</h2>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tên"
              value={name}
              onChange={this.handleChange("name")}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange("email")}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Tuổi"
              value={age === 0 ? "" : age}
              onChange={this.handleChange("age")}
              min={0}
              max={120}
              inputMode="numeric"
            />
          </div>

          {errorMsg && <div className="error">{errorMsg}</div>}

          <div className="btn-group">
            <button type="submit">Gửi</button>
            <button type="button" onClick={this.handleReset}>
              Xóa
            </button>
          </div>
        </form>

        {submitted && (
          <div className="submitted">
            <h3>Dữ liệu đã submit</h3>
            <p>
              <strong>Name:</strong> {submitted.name}
            </p>
            <p>
              <strong>Email:</strong> {submitted.email}
            </p>
            <p>
              <strong>Age:</strong> {submitted.age}
            </p>
          </div>
        )}
      </div>
    );
  }
}
