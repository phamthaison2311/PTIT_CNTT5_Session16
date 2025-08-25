import React, { Component } from 'react'

interface StateType {
    subject: string[];
}
export default class SubjectList extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            subject: ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        }
    }
  render() {
    return (
      <>
       <h2>Danh sách môn học</h2> 
       <ul>
        {this.state.subject.map((sub, index) => (
            <li key={index}>{sub}</li>
        ))}
       </ul>
      </>
    )
  }
}
