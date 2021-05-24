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

  // Format paths into all lowercase & replace spaces with dashes
   addDash = (arr) => {
    // Initialize array with path for 'Home' Button
    let newArr = ["/"];
    for (var i = 1; i < arr.length; i++) {
      newArr.push(arr[i].substr(0, arr[i].indexOf(" ")).toLowerCase());
    }
    return newArr;
  };
  
  // Values to map as anchor tag href - Mobile
   values = this.addDash(this.paths);
  // Values to map as anchor tag href without 'Home' - Desktop
   webArr = this.paths.map(m => m).splice(1,this.paths.length - 1)
  
  render() {
    return (
      <NavContext.Provider value={{ paths: this.paths,  values: this.values,  webArr: this.webArr}}>
        {this.props.children}
      </NavContext.Provider>
        )
    }
}

export { NavContextProvider, NavContext }