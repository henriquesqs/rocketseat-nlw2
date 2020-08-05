import React from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

// TeacherList will show available teachers in our application to students/ users
// who wants to hire a teacher.
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Biologia", label: "Biologia" },
                            { value: "Ciências", label: "Ciências" },
                            { value: "Física", label: "Física" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Português", label: "Português" },
                            { value: "Inglês", label: "Inglês" },
                            { value: "História", label: "História" },
                            {
                                value: "Educação Física",
                                label: "Educação Física",
                            },
                        ]}
                    />
                    <Input name="week-day" label="Dia da semana"></Input>
                    <Input type="time" name="time" label="Hora"></Input>
                </form>
            </PageHeader>

            <main>
                {/* Just showing how this page should be with many available teachers */}
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
