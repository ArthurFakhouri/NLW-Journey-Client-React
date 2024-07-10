import { FormEvent, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./invite-guests-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { TripPlanning } from "./trip-planning"

export function CreateTrip() {

  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([
    'diego@rocketseat.com.br',
    'jessica.white44@yahoo.com'
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return

    if (emailsToInvite.includes(email)) return

    setEmailsToInvite((emailsToInvite) => [
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailToInvite(email: string) {
    const emailsToInviteWithoutRemoved = emailsToInvite.filter((emailToInvite) => emailToInvite !== email)

    setEmailsToInvite(emailsToInviteWithoutRemoved)
  }

  function createTrip() {
    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center text-center bg-pattern bg-no-repeat bg-center">
      <TripPlanning 
        openGuestsInput={openGuestsInput}
        closeGuestsInput={closeGuestsInput}
        emailsToInvite={emailsToInvite}
        isGuestsInputOpen={isGuestsInputOpen}
        openConfirmTripModal={openConfirmTripModal}
        openGuestsModal={openGuestsModal}
      />

      {
        isGuestsModalOpen &&
        createPortal(
          <InviteGuestsModal
            closeGuestsModal={closeGuestsModal}
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            removeEmailToInvite={removeEmailToInvite}
          />
          , document.body)
      }

      {
        isConfirmTripModalOpen &&
        createPortal(
          <ConfirmTripModal
            closeConfirmTripModal={closeConfirmTripModal}
            addNewEmailToInvite={addNewEmailToInvite}
            createTrip={createTrip}
          />
          , document.body)
      }
    </div >
  )
}