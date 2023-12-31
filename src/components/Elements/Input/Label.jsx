
function Label(props) {
  const {htmlFor, title} = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">
                {title}
              </label>
  )
}

export default Label;