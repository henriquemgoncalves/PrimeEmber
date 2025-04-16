import style from '@/styles/components/Form.module.sass';

export default function Form (){

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try{
            const response = await fetch("https://formspree.io/f/mldeykwk", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if(response.ok){
                alert("Mensagem enviada com Sucesso");
                form.reset();
            } else {
                alert("Erro ao enviar a mensagem");
            }
        } catch (error){
            alert("Erro ao enviar a mensagem");
                console.error("Erro", error);
        }
        ;
    }

    return(
        <section className={style.formulario}>
            <form onSubmit={handleSubmit}>
                <h2>Entre em contato</h2>
                <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
                <input type="text" name="name" placeholder="Nome" required/>
                <input type="email" name="email" placeholder="E-mail" required/>

                <textarea name="message" placeholder="Deixe sua mensagem..." required></textarea>
            
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}