import Education from './Education'
import Experience from './Experience'
import KeySkills from './KeySkills'
import PersonalInfo from './PersonalInfo'
import PersonalStatement from './PersonalStatement'

const App = () => {
    return (
        <div>
            <PersonalInfo/>
            <PersonalStatement/>
            <KeySkills/>
            
            <div className="page-break"></div>
            
            <Education/>
            <Experience/>
        </div>
    )
}

export default App