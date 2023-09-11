import React from "react";
import { NovoClass } from "./components/NovoClass";

export class AppClass extends React.Component {
    render() {
        return(
            <div>
                <h2>Class component</h2>
                <NovoClass />
            </div>
        );
    }
}