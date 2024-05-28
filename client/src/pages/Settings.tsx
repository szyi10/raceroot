import GlobalStyle from "../components/GlobalStyle"
import { useUser } from "../hooks"
import { DangerZone, SettingsInput, SettingsPanel } from "../components/feature"
import { Spinner } from "../components/layout"
import { useEffect, useState } from "react"
import { updateUser } from "../lib/api"

const Settings = () => {
  const [inputValue, setInputValue] = useState({
    nickname: "",
    photo: "",
    bio: "",
  })
  const { nickname, photo, bio } = inputValue
  const { user } = useUser()

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setInputValue({
      ...inputValue,
      [name.toLowerCase()]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user) {
      updateUser(user._id, inputValue)
    }
  }

  useEffect(() => {
    if (user) {
      setInputValue({
        nickname: user.nickname,
        photo: user.photo,
        bio: user.bio,
      })
    }
  }, [user])

  if (!user) {
    return <Spinner />
  }

  return (
    <GlobalStyle>
      <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
        <div className="max-w-4xl w-full flex flex-col gap-6 mx-auto sm:p-8 md:border md:border-gray-200 dark:border-neutral-800 md:rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row flex-wrap w-full"
          >
            <SettingsPanel title="Basic info" paddingRight>
              <SettingsInput
                name="nickname"
                label="Display Name"
                type="text"
                value={nickname}
                onChange={handleOnChange}
              />
              <SettingsInput
                name="photo"
                label="Photo"
                type="text"
                isPhoto
                value={photo}
                onChange={handleOnChange}
              />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows={5}
                  className="input w-full"
                  value={bio}
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </SettingsPanel>
            <SettingsPanel title="Profile Identity">
              <SettingsInput
                name="username"
                label="Name"
                type="text"
                disabled
              />
              <SettingsInput
                name="email"
                label="Email Address"
                type="email"
                disabled
              />
              <DangerZone />
            </SettingsPanel>
            <button type="submit" className="button-primary text-base">
              Update
            </button>
          </form>
        </div>
      </main>
    </GlobalStyle>
  )
}

export default Settings
