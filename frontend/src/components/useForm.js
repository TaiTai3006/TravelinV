import { useState, useEffect } from "react";
import { omit } from "lodash";
import axios from "axios";

const useForm = (callback) => {
  const [checkAccounts, setCheckAccount] = useState({});
  const [account, setAccount] = useState({
    userName: "",
    password: "",
    accountType: "user",
  });
  const [errors, setErrors] = useState({});
  console.log(checkAccounts, account,'1');
  useEffect(() => {
    const fecthCheckAccout = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/account/" + account.userName
        );
        setCheckAccount(
          res.data.reduce((t, v) => {
            const { name, ...rest } = v;
            t = rest;
            return t;
          }, {})
        );
      } catch (err) {
        console.log(err);
      }
    };
    account.userName && fecthCheckAccout();
  }, [account.userName]);
  
  const validate = (name, value) => {
    switch (name) {
      case "userName":
        console.log(checkAccounts, account,'3')
        // if(value.length <= 4){
        //     // we will set the error state

        // setErrors({
        //     ...errors,
        //     username:'Username atleast have 5 letters'
        // })
        // }else{
        //     // set the error state empty or remove the error for username input

        //     //omit function removes/omits the value from given object and returns a new object
        //     let newObj = omit(errors, "username");
        //     setErrors(newObj);

        // }
        if (Object.keys(checkAccounts).length !== 0) {
          setErrors({
            ...errors,
            userName: "Username alreadly exists",
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
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
    validate(event.target.name, event.target.value);
    console.log(checkAccounts, account,'2');
  };

  // const handleSubmit = (event) => {
  //     if(event) event.preventDefault();

  //     if(Object.keys(errors).length === 0 && Object.keys(account).length !==0 ){
  //         callback();

  //     }else{
  //         alert("There is an Error!");
  //     }
  // }

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/account", account);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    account,
    errors,
    handleChange,
    handleCreateAccount,
  };
};

export default useForm;
