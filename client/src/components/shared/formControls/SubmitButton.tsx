const SubmitButton = ({ text }: { text: string }) => {
  return (
    <button className="button-primary flex justify-center w-full sm:w-1/2 font-semibold py-4">
      {text}
    </button>
  )
}

export default SubmitButton
