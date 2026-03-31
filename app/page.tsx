import Image from "next/image";
import { createClient } from '@supabase/supabase-js'
import { it } from "node:test";
const supabaseUrl = 'https://xybvehzveemhmnmvgdnw.supabase.co'
const supabaseKey = 'sb_publishable_i8KZNL8M6TTkxU-yI29nLA_gQi1fkyp'
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function Home() {

let { data: Sample, error } = await supabase
  .from('Sample')
  .select('*')

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Maxine's Microsite
          </h1>


          {Sample?.map((item) => { 

            return <li><strong>{item.name}</strong>: {item.description} - {item.type}</li>
          })}
                  

        
        </div>
      </main>
    </div>
  );
}
