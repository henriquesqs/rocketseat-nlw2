import React from "react";
import PageHeader from "../../components/PageHeader";

// TeacherForm component is responsible for showing teachers a form so they can
// answer some questions about himself/ sheself and the lecture.
function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." />
        </div>
    );
}

export default TeacherForm;
