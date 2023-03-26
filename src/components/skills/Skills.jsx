import "./Skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">
                Habilidades
            </h2>
            <span className="section_subtitle">Meu nível técnico</span>

            <div className="skills_container container grid">
                <Frontend />
                <Backend/>
            </div>
        </section>
    )
}