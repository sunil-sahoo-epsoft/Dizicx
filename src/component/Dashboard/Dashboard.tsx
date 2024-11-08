import CustomButton from "../commons/Buttons/CustomButton"
import PasswordInput from "../commons/Inputs/PasswordInput"
import SelectInput from "../commons/Inputs/SelectInput"
import TextInput from "../commons/Inputs/TextInput"
import UploadInput from "../commons/Inputs/UploadInput"

const Dashboard = () => {
  return (
    <div>
      Dashboard

      <PasswordInput name="password" label="Password" />
      <TextInput type="email" label="email" />
      <SelectInput iconColor="red" label="select" />
      <UploadInput label="uploads" required="true" />
      <CustomButton text="buttons" />

    </div>
  )
}

export default Dashboard