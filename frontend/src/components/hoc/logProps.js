import React from 'react';

function logProps(WrappedComponent)
{
    return class extends React.Component
    {   
        componentDidUpdate(prevProps) {
            console.log('Current props: ', this.props);
            console.log('Previous props: ', prevProps);
          }

        render()
        {
            return(
                <div>
                    {
                        this.props.loading ? <div>Loading</div> :
                        <WrappedComponent {...this.props} />
                    }
                </div>
            )
        }
    }

}

export default logProps; 