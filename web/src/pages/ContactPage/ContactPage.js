import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { Link, routes } from '@redwoodjs/router'
import { Flash, useFlash, useMutation } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const { addMessage } = useFlash()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      addMessage('Thank you for your submission!', {
        style: { backgroundColor: 'green', color: 'white', padding: '1rem' },
      })
      formMethods.reset()
    },
  })
  const onSubmit = (form) => {
    console.log(form)
    create({
      variables: {
        input: form,
      },
    })
  }
  return (
    <BlogLayout>
      <Flash timeout={2000} />
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        ></FormError>

        <Label errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          errorClassName="error"
          validation={{ required: true }}
          name="name"
        />
        <FieldError className="error" name="name" />

        <Label errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          name="email"
        />
        <FieldError className="error" name="email" />

        <Label errorClassName="error" name="message">
          Message
        </Label>
        <TextAreaField
          errorClassName="error"
          validation={{ required: true }}
          name="message"
        />
        <FieldError className="error" name="message" />

        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
