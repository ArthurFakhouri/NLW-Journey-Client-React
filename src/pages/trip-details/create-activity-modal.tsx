import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

type CreateActivityModalProps = {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar Atividade</h2>
            <button type='button' onClick={closeCreateActivityModal}>
              <X className='size-5 text-zinc-400 hover:text-zinc-300' />
            </button>
          </div>
          <p className='text-sm leading-[160%] text-zinc-400'>
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
        <form
          className='flex flex-col gap-3'
        >
          <div className='flex flex-col gap-2'>
            <div
              className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
            >
              <Tag className='size-5 text-zinc-400' />
              <input
                name='title'
                className='bg-transparent flex-1 placeholder-zinc-400 outline-none'
                placeholder='Qual a atividade?'
              />
            </div>
            <div className="flex items-center gap-2">
              <div
                className='h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
              >
                <Calendar className='size-5 text-zinc-400' />
                <input
                  type="datetime-local"
                  name="occurs_at"
                  className='bg-transparent flex-1 placeholder-zinc-400 outline-none'
                  placeholder='Data e horário da atividade'
                />
              </div>
            </div>
          </div>
          <Button
            type='submit'
            className="justify-center"
          >
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}