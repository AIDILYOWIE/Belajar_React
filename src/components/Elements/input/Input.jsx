function Input(props){
    const {type, placeholder} = props;
    return (
        <>
              <input type={type} className="text-sm border rounded w-full py-2 px-3 text-slate-800" placeholder={placeholder} />
        </>
    );
}

export default Input