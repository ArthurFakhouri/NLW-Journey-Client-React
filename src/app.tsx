import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { createPortal } from 'react-dom'

export function App() {

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
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

  return (
    <div className="h-screen flex items-center justify-center text-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er' />
          <p className="text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex flex-1 items-center gap-2'>
              <MapPin className='size-5 text-zinc-400' />
              <input
                className="bg-transparent text-lg flex-1 placeholder-zinc-400 outline-none"
                type="text"
                placeholder="Para onde você vai?"
                disabled={isGuestsInputOpen}
              />
            </div>
            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400' />
              <input
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                type="text"
                placeholder="Quando?"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestsInputOpen &&
              <button onClick={closeGuestsInput} className='bg-zinc-800 rounded-lg text-zinc-200 px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                Alterar local/data
                <Settings2 className='size-5' />
              </button>
            }
            {!isGuestsInputOpen &&
              <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Continuar
                <ArrowRight className='size-5 ' />
              </button>}
          </div>
          {
            isGuestsInputOpen &&
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button type='button' onClick={openGuestsModal} className='flex flex-1 items-center gap-2 text-left'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                <span
                  className="bg-transparent text-lg w-full text-zinc-400 outline-none"
                >
                  Quem estará na viagem?
                </span>
              </button>
              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar Viagem
                <ArrowRight className='size-5 ' />
              </button>
            </div>
          }
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos {" "}
          <a href="#" className="text-zinc-300 hover:underline">termos de uso</a>
          {" e "}
          <a href="#" className="text-zinc-300 hover:underline">políticas de privacidade</a>.</p>
      </div>

      {isGuestsModalOpen &&
        createPortal(
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
                  <button type='button' onClick={closeGuestsModal}>
                    <X className='size-5 text-zinc-400 hover:text-zinc-300' />
                  </button>
                </div>
                <p className='text-sm text-zinc-400'>
                  Os convidados irão receber e-mails para confirmar a participação na viagem.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {emailsToInvite.map((email) => (
                  <div key={email}>
                    <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                      <span className='text-zinc-300'>{email}</span>
                      <button
                        type='button'
                        onClick={() => removeEmailToInvite(email)}
                      >
                        <X className='size-4 text-zinc-400 hover:text-zinc-300' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className='w-full h-px bg-zinc-800' />

              <form
                className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
                onSubmit={addNewEmailToInvite}
              >
                <div className='px-2 flex items-center flex-1 gap-2'>
                  <AtSign className='size-5 text-zinc-400' />
                  <input
                    type="email"
                    name='email'
                    className='bg-transparent text-lg flex-1 placeholder-zinc-400 outline-none'
                    placeholder='Digite o e-mail do convidado'
                  />
                </div>
                <button
                  type='submit'
                  className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
                >
                  Convidar
                  <Plus className='size-5' />
                </button>
              </form>
            </div>
          </div>
          , document.body)
      }
    </div>
  )
}
