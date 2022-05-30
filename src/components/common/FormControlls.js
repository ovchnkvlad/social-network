import React from 'react'

const FormControl = ({input, meta: {touched, error, warning}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className="input-wrapper">
            {children}
            {hasError && <span className="error-description">{error}</span>}
        </div>
    )

}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

// export const Input = ({input, meta: {touched, error, warning}, ...props}) => {
//
//     const hasError = touched && error;
//     return (
//         <div className="textarea-wrapper">
//             <textarea {...input} {...props} className={`${hasError && 'error'}`}/>
//             {hasError && <span className="error-description">{error}</span>}
//         </div>
//     )
// }


