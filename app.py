from flask import Flask, render_template, request
from pytube import Playlist

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/salvar', methods=['POST'])
def salvar():
    playlist_url = request.form['playlist_url']
    nome_arquivo = request.form['nome_arquivo']

    try:
        playlist = Playlist(playlist_url)

        # Salvar URLs em um arquivo separado
        with open(f'{nome_arquivo}.txt', 'w', encoding='utf-8') as f_urls:
            for video in playlist.videos:
                f_urls.write(f'https://www.youtube.com/watch?v={video.video_id}\n')

        # Salvar tuplas completas em outro arquivo
        with open(f'{nome_arquivo}-completo.txt', 'w', encoding='utf-8') as f_completo:
            for video in playlist.videos:
                f_completo.write(f"('{video.title}', '{video.video_id}', 'https://www.youtube.com/watch?v={video.video_id}')\n")

        mensagem = "Arquivos salvos com sucesso!"
    except Exception as e:
        mensagem = f"Ocorreu um erro: {e}"

    return render_template('index.html', mensagem=mensagem)

if __name__ == '__main__':
    app.run(debug=True)
