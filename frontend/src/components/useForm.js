import { useState, useEffect, useContext } from "react";
import { omit } from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import defaultAvatar from "../image/default_avatar.png";

const useForm = (callback) => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [checkConfirmPw, setCheckConfirmPw] = useState();

  const [account, setAccount] = useState({
    userName: "",
    password: "",
    accountType: "user",
    image: defaultAvatar,
  });

  const [errors, setErrors] = useState({});

  const [checkBox, setCheckBox] = useState();

  const [checkAccounts, setCheckAccount] = useState();

  useEffect(() => {
    const fecthCheckAccout = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/register/" + account.userName
        );
        setCheckAccount(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    account.userName && fecthCheckAccout();
  }, [account.userName]);

  useEffect(() => {
    const CheckConfirmPw = () => {
      checkConfirmPw !== "" && checkConfirmPw !== account.password
        ? setErrors({
            ...errors,
            confirmPw: "Confirm Password must be the same as entered password.",
          })
        : setErrors(omit(errors, "confirmPw"));
    };
    checkConfirmPw ? CheckConfirmPw() : setErrors(omit(errors, "confirmPw"));
  }, [checkConfirmPw]);

  const handleChangeConfirmPw = (e) => {
    setCheckConfirmPw(e.target.value);
  };

  const handleCheckBox = () => {
    if (checkBox) setCheckBox();
    else {
      setCheckBox(true);
      setErrors(omit(errors, "checkBox"));
    }
  };

  const validate = (name, value) => {
    if (value) {
      switch (name) {
        case "userName":
          if (value.length <= 4) {
            setErrors({
              ...errors,
              userName: "Username atleast have 5 letters.",
            });
          } else {
            let newObj = omit(errors, "userName");
            setErrors(newObj);
          }
          break;

        case "email":
          if (
            !new RegExp(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ).test(value)
          ) {
            setErrors({
              ...errors,
              email: "Enter a valid email address.",
            });
          } else {
            let newObj = omit(errors, "email");
            setErrors(newObj);
          }
          break;

        case "password":
          if (
            // !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
            value.length < 8
          ) {
            setErrors({
              ...errors,
              password: "Password should contains atleast 8 charaters.",
            });
          } else {
            let newObj = omit(errors, "password");
            setErrors(newObj);
          }
          break;

        default:
          break;
      }
    } else setErrors(omit(errors, name));
  };

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
    validate(event.target.name, event.target.value);
  };

  const handleChangeLogin = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    setErrors(omit(errors, "login"));
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      if (
        Object.keys(errors).length === 0 &&
        Object.keys(account).length !== 0 &&
        checkBox
      ) {
        await axios.post("http://localhost:8800/account", account);
        setUser({ ...user, userName: account.userName });
        navigate("/Login");
      } else {
        !checkBox &&
          setErrors({
            ...errors,
            checkBox: "You must accepted with terms and conditions.",
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      if (account.userName.length !== 0 && account.password.length !== 0) {
        const res = await axios.post(
          `http://localhost:8800/login/${account.userName}`,
          account
        );
        if (res.data) {
          setUser({ userName: account.userName, loggedIn: true, accountType: account.accountType });
          navigate("/");
        } else {
          setErrors({ ...errors, login: "Incorrect username or password." });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    checkAccounts,
    user,
    account,
    errors,
    handleChange,
    handleCreateAccount,
    handleChangeConfirmPw,
    handleCheckBox,
    handleChangeLogin,
    handelLogin,
  };
};

export default useForm;
