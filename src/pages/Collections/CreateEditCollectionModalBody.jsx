import HangUpSign from "../../components/hangUpSing"
import TextArea from "../../components/TextArea"
import CheckBoxButton from "../../components/CheckBoxButton"
import InputField from "../../components/InputField"
import RadioButton from "../../components/RadioButton"
import Button from "../../components/Button"
import { useState, useEffect, useContext } from 'react'
import { editCollection, AddCollection } from "../../utils/APICommunication"
import { AuthContext } from "../../context/AuthContext"
function ModalBody({ closeModel, editMode }) {
  const { jwt } = useContext(AuthContext);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [usernamesInput, setUsernamesInput] = useState("");
  const [isShared, setIsShared] = useState(false);
  const [radioButtonValue, setRadioButtonValue] = useState(0);

  const [usernamesInputValidation, setUsernamesInputValidation] = useState(false);
  const [titleInputValidation, setTitleInputValidation] = useState(false);
  const [radioButtonsValidation, setRadioButtonsValidation] = useState(false);

  const [disableButton, setDisableButton] = useState(false);
  useEffect(() => {
    setRadioButtonsValidation(radioButtonValue == 1 || radioButtonValue == 2)
  }, [radioButtonValue]);

  useEffect(() => {
    setTitleInputValidation(titleInput?.length >= 3)
  }, [titleInput]);

  useEffect(() => {

    console.log(editMode())
    if (editMode().isActive) {
      setTitleInput(editMode().collection.name)
      setDescriptionInput(editMode().collection.description)
      setIsShared(editMode().collection.globalWriteAccess !== null && editMode().collection.sharedWith.length)
      if (editMode().collection.globalWriteAccess !== null && editMode().collection.sharedWith.length) {
        setRadioButtonValue(editMode().collection.globalWriteAccess + 1)
        console.log(editMode().collection);
        setUsernamesInput(editMode().collection.sharedWith.reduce((pv, cv) => { return pv ? `${pv},${cv}` : cv }, ""))
      }
    }
  }, [editMode()]);

  return (
    <div className="h-screen relative overflow-y-auto">
      <button onClick={() => { setIsShared(false); setDescriptionInput(''); setTitleInput(''); closeModel() }} className="absolute right-10 top-4 bg-black h-12 hover:bg-neutral-900 w-12 rounded-full">✖</button>
      <HangUpSign writeable text={"hello world"} fieldValue={titleInput} setInputValue={setTitleInput} />
      <br />
      <br />

      <div className="flex flex-col justify-center items-center">
        <div className="inline">
          <TextArea inputValue={descriptionInput} setInputValue={setDescriptionInput} hasALabel={true} label={"Description"} name={"description"} />
          <br />
          <br />
          <div className="mx-2">
            <CheckBoxButton setIsChecked={setIsShared} isChecked={isShared} text={"Share With"} />
            {
              isShared ? (
                <>
                  {/* fix the init value */}
                  <InputField initValue={usernamesInput} setInputValue={setUsernamesInput} setIsValid={setUsernamesInputValidation} validationRegex={/^(?![_.,])(?!.*[_.,]{2})[a-zA-Z0-9._,]+(?<![_.,])$/} className={"text-xl"} name={"sharedWithUsernames"} hasALabel={true} label={"Usernames separated by a coma"} />
                  <RadioButton setValue={setRadioButtonValue} texts={["Read only", "Read & write"]} />
                </>) : ""
            }
            <div className="flex justify-center mt-4">
              <Button disable={disableButton || !(titleInputValidation && (!isShared || radioButtonsValidation && usernamesInputValidation))}
                onClick={async () => {
                  setDisableButton(true)
                  const collectionData = {
                    radioButton: radioButtonValue,
                    isShared,
                    usernames: usernamesInput,
                    description: descriptionInput,
                    title: titleInput
                  }
                  if (editMode().isActive ?
                    await editCollection(jwt, { id: editMode().collection.id, ...collectionData }) :
                    await AddCollection(jwt, collectionData)) {
                    setDisableButton(false)
                    closeModel()
                  }
                  setDisableButton(false)
                }
                }
                text={"Done"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalBody