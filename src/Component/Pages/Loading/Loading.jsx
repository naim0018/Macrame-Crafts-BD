
import Lottie from 'react-lottie';
import loading from './loading.json'
const Loading = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
        
    };

    return (
        <div className='min-h-screen  flex items-center justify-center -mt-20'>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
                isClickToPauseDisabled={true}
            />
        </div>
    );
};

export default Loading;