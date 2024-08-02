import { logo } from './banner.module.css'

const subtiteStyle = {
    fontStyle: 'italic',
    fontSize: 'x-large',
    color: 'black'
};

const Banner = ({children}) => {
    return(
        <header className='row mb-4'>
            <div className='col-5'>
                <img src='./logo.jpg' alt='logo' className={logo}/>
            </div>
            <div className='col -7 mt-5' style={subtiteStyle}> 
                {children}
            </div>
        </header> 

    );
};

export default Banner;