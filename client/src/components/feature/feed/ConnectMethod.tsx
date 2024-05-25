type MethodProp = {
  method: {
    name: string
    icon: () => JSX.Element
  }
}

const ConnectMethod = ({ method }: MethodProp) => {
  return (
    <a
      href="https://discord.com/"
      target="_blank"
      rel="noreferrer"
      className="w-6 h-6"
    >
      {method.icon()}
    </a>
  )
}

export default ConnectMethod
