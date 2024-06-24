import Container from '@/components/container'
import HitungBeton from '@/components/perhitungan/hitung-beton'

const BetonPage = () => {
    return (
        <Container className="pb-20 pt-10">
            <div className="space-y-6 rounded-lg border border-border p-4">
                <h3 className="text-3xl">Pekerjan Beton</h3>
                <HitungBeton />
                <p className="text-center leading-loose text-muted-foreground">
                    Perhitungan Volume Pekerjaan Begisting Mengacu pada Peraturan Penteri PUPR nomor 8 tahun 2023
                    (Pedoman Penyusunan Perkiraan Biaya Pekerjaan Konstruksi Bidang Pekerjaan Umum dan Perumahan
                    Rakyat).
                </p>
            </div>
        </Container>
    )
}

export default BetonPage
