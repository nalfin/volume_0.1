import ContactForm from '../contact-form'
import Container from '../container'
import LabelSection from '../label'

const HomeContact = () => {
    return (
        <Container>
            <div id="hubungi-kami" className="py-20 lg:py-[120px]">
                <div className="dark:text-base-dark flex flex-col gap-6 rounded-[16px] border border-border bg-card px-4 py-[40px] dark:bg-zinc-800/40 lg:flex-row lg:gap-10 lg:rounded-[24px] lg:p-20">
                    <div className="w-full space-y-6 lg:min-w-[450px] lg:space-y-8">
                        <div className="flex flex-col items-center space-y-[18px] lg:block lg:space-y-6">
                            <LabelSection text="Hubungi Kami" />
                            <h2 className="dark:text-base-light text-center lg:text-left">
                                Hubungi Kami Sekarang!
                            </h2>
                        </div>
                        <p className="dark:text-base-light text-center lg:text-left">
                            Kami menghargai setiap masukan dan pertanyaan dari
                            Anda. Bersama-sama, kita bisa menciptakan pengalaman
                            yang lebih baik.
                        </p>
                    </div>
                    <div className="mt-6 w-full lg:mt-20">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomeContact
