import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

type ConfirmTripCreationProps = {
  closeConfirmTripModal: () => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  createTrip: () => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  addNewEmailToInvite,
  createTrip
}: ConfirmTripCreationProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Confirmar criação da viagem</h2>
            <button type='button' onClick={closeConfirmTripModal}>
              <X className='size-5 text-zinc-400 hover:text-zinc-300' />
            </button>
          </div>
          <p className='text-sm leading-[160%] text-zinc-400'>
            Para concluir a criação da viagem para {' '}
            <span className='text-zinc-100 font-bold'>Florianópolis, Brasil</span>
            {" nas datas de "}
            <span className='text-zinc-100 font-bold'>16 a 27 de Agosto de 2024</span>
            {" preencha seus dados abaixo:"}
          </p>
        </div>
        <form
          onSubmit={addNewEmailToInvite}
          className='flex flex-col gap-3'
        >
          <div className='flex flex-col gap-2'>
            <div
              className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
            >
              <User className='size-5 text-zinc-400' />
              <input
                name='name'
                className='bg-transparent flex-1 placeholder-zinc-400 outline-none'
                placeholder='Seu nome completo'
              />
            </div>
            <div
              className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
            >
              <Mail className='size-5 text-zinc-400' />
              <input
                type="email"
                name='email'
                className='bg-transparent flex-1 placeholder-zinc-400 outline-none'
                placeholder='Seu e-mail pessoal'
              />
            </div>
          </div>
          <Button
            type='submit'
            onClick={createTrip}
          >
            Confirmar criação de viagem
          </Button>
        </form>
      </div>
    </div>
  )
}