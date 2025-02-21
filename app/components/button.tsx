export default function Button({ text = "Boton", color = "bg-pink-300", hoverColor = "hover:bg-pink-400" }) {
    return (
      <div className={`${color} p-8 w-32 h-16 flex items-center justify-center ${hoverColor} cursor-pointer rounded-lg`}>
        {text}
      </div>
    );
}