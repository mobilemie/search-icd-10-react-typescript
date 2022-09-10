import React from 'react'

interface ICreateUser {
    user: any;
    onChangeForm: Function;
    createUser: Function;
}

function CreateUser({user, onChangeForm, createUser} : ICreateUser) {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <form>
                    <div className="row">
                        <div className="form-group col-md-10">
                            <label htmlFor="exampleInputEmail1">ICD-10 Version:2010</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="Search" />
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser