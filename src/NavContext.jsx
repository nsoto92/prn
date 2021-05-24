import React, { Component } from "react"
const NavContext = React.createContext()

class NavContextProvider extends Component {
      // Nav Button Text
   paths = [
    "Home ",
    "Patients ",
    "Caregivers ",
    "Nurses ",
    "Healthcare Providers",
    "About ",
    "Contact ",
  ];
  // Add dash between 'Healthcare Provides' for path
   addDash = (arr) => {
    //   Initialize array with path for 'Home' Button
    let newArr = ["/"];
    for (var i = 1; i < arr.length; i++) {
      newArr.push(arr[i].substr(0, arr[i].indexOf(" ")).toLowerCase());
    }
    return newArr;
  };
   values = this.addDash(this.paths);
    render() {
        return (
            <NavContext.Provider value={{ paths: this.paths,  values: this.values}}>
                {this.props.children}
            </NavContext.Provider>
        )
    }
}

export { NavContextProvider, NavContext }