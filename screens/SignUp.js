// SignUp.js
import React from "react";
import { TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { KeyboardAvoidingView } from "react-native";

export default class SignUp extends React.Component {
  state = {
    company_name: "",
    web_site: "",
    num_of_employee: "",
    country: "",
    city: "",
    address: "",
    full_name: "",
    email: "",
    password: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  onSelectValue = (key, array, id) => {
    this.setState({ [key]: array[id] });
  };

  signUp = async () => {
    const data = this.state;

    try {
      let response = await fetch(
        "http://cryptic-basin-27673.herokuapp.com/sign_up",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      if (response.status >= 200 && response.status < 300) {
        alert("authenticated successfully!!!");
      }
    } catch (errors) {
      alert(errors);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.buttonText}>Sign Up Form</Text>
        <TextInput
          style={styles.firstInput}
          placeholder="Company Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("company_name", val)}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="Web Site"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("web_site", val)}
          placeholderTextColor={"gray"}
        />
        <ModalDropdown
          style={styles.input}
          placeholder="Number of Employees"
          autoCapitalize="none"
          placeholderTextColor="white"
          options={["1 - 10", "10 - 100", "100 - 1000", ">1000"]}
          onSelect={val =>
            this.onSelectValue(
              "num_of_employee",
              ["1 - 10", "10 - 100", "100 - 1000", ">1000"],
              val
            )
          }
          defaultValue="Number of Employees"
          textStyle={styles.text}
          dropdownStyle={styles.dropdown}
          dropdownTextStyle={styles.dropdownText}
          dropdownTextHighlightStyle={styles.dropdownTextHighlight}
          showsVerticalScrollIndicato={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("country", val)}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("city", val)}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("address", val)}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("full_name", val)}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("email", val)}
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.lastInput}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("password", val)}
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity style={styles.button} onPress={this.signUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
    borderColor: "gray",
    borderTopWidth: 1,
    marginTop: 1.5
  },
  firstInput: {
    marginTop: 20,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: 350,
    height: 55,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
    borderColor: "gray",
    borderTopWidth: 1
  },
  lastInput: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    width: 350,
    height: 55,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
    borderColor: "gray",
    borderTopWidth: 1,
    marginTop: 1.5
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    margin: 10,
    marginLeft: 0,
    color: "gray"
  },
  dropdown: {
    borderWidth: 2,
    margin: 10,
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "500"
  },
  dropdownText: {
    fontSize: 18,
    backgroundColor: "transparent",
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
    margin: 10,
    marginLeft: 0
  },
  dropdownTextHighlight: {
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 20
  },
  button: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 25,
    paddingHorizontal: 100,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white"
  }
});
