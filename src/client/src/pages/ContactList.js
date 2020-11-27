// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ContactActions from "../redux/actions/ContactActions";

// END IMPORT ACTIONS

/** APIs

* actionsContact.list
*	@description CRUD ACTION list
*	@param String userId - user contacts belong to
*	@returns ARRAY OF Contact
*

**/


class ContactList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsContact.loadContactList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsContact.deleteContact(this.state.idDelete).then(data => {
      this.props.actionsContact.loadContactList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "phone",
        type: "string",
        label: "Phone"
      }, 
      {
        id: "userId",
        type: "custom",
        label: "UserId"
      },
    ];
    const link = "/contacts/";

    return (
      <div>
        <h1>Contact List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">UserId</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/contacts/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.phone }</TableCell>
                <TableCell align="right">{ row.userId }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/contacts/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsContact: bindActionCreators(ContactActions, dispatch),
  };
};

// Validate types
ContactList.propTypes = { 
  actionsContact: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ContactListReducer.listContact
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
