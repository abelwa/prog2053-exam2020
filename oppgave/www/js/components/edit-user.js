import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
<form class="form-horizontal">
  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">email</label>
      <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
    </div>

    <div class="form-group pt-1 ml-5" style="width: 20rem">
      <label for="firstName">FirstName</label>
      <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>

    <div class="form-group pt-1 ml-5" style="width: 20rem;">
      <label for="lastName">Last Name</label>
      <input class="form-control" id="lastName" placeholder = "navn" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>

    <div class="form-group pt-1 ml-5" style="width: 20rem;">
      <label for="old password">Old Password</label>
      <input type="password" class="form-control" id="oldpwd" name="oldpwd" placeholder="123-45-678" type="text" value="">
    </div>

    <div class="form-group pt-1 ml-5" style="width: 20rem;">
      <label for="new password">New Password</label>
      <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
  </div>
  <input type="submit" @click=${this.UserUpdate} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
</form>
    `;
  }

  //Function to update user data 
  UserUpdate(e) {
    //data from the the form
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("User Updated");
        } else {
            console.log("User not Updated");
        }
      })
  }

}
customElements.define('edit-user', EditUser);