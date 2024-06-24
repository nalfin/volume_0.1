import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const BetonPage = () => {
    return (
        <Container className="space-y-6 pb-20 pt-10">
            <h3>Pekerjan Beton</h3>
            <div className="rounded-lg border border-border p-6">
                <Tabs defaultValue="input" className="w-full">
                    <div className="relative">
                        <TabsList className="mb-4 w-full md:w-1/4">
                            <TabsTrigger value="input" className="w-full">
                                Input Form
                            </TabsTrigger>
                            <TabsTrigger value="tabel" className="w-full">
                                Tabel Beton
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="input">
                            <div className="rounded-md border border-border p-4">
                                <h1>input</h1>
                            </div>
                        </TabsContent>
                        <TabsContent value="tabel">
                            <div className="rounded-md border border-border p-4">
                                <h1>tabel</h1>
                            </div>
                        </TabsContent>
                        <div className="mt-4 block md:absolute md:right-0 md:top-0 md:mt-0">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <Button className="bg-blue-700 text-white">
                                    Hitung Volume
                                </Button>
                                <Button className="bg-red-700 text-white">
                                    Reset All Data
                                </Button>
                                <Button className="bg-blue-700 text-white">
                                    Export to Excel
                                </Button>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
            <p className="text-center leading-loose text-muted-foreground">
                Perhitungan Volume Pekerjaan Begisting Mengacu pada Peraturan
                Penteri PUPR nomor 8 tahun 2023 (Pedoman Penyusunan Perkiraan
                Biaya Pekerjaan Konstruksi Bidang Pekerjaan Umum dan Perumahan
                Rakyat).
            </p>
        </Container>
    )
}

export default BetonPage
