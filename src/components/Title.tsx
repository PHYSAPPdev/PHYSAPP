import '../styles/title.sass';

const Title = ({title}: {title:string}) => {
    return  (
        <div className='section-title'>
            <span></span>
            <h1> {title} </h1>
            <span></span>
        </div>
    );
    
}

export default Title;