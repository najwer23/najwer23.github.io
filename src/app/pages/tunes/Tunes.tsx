import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@najwer23/hooks/useImmediateThrottledQuery';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { useEffect, useState } from 'react';
import AudioVisualizer from './AudioVisualizer';
import { queryPlaylist, type Song } from './Playlist.query';

export const Tunes: React.FC = () => {
  useDocumentTitle('Tunes | Mariusz Najwer');

  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [counterSong, setCounterSong] = useState<number>(0);

  const { result, isLoading } = useImmediateThrottledQuery({
    queryKey: ['queryPlaylist', 'queryPlaylist'],
    queryFn: () => queryPlaylist(),
    staleTime: 30 * 1000 * 60,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  });

  const playlist = result?.data.audios ?? [];

  useEffect(() => {
    if ((playlist.length > 0 && counterSong === 0 && !selectedSong) || counterSong >= playlist.length) {
      setCounterSong(0);
      setSelectedSong(null);
    }
  }, [counterSong, playlist.length]);

  const song = !selectedSong && playlist.length > 0 ? playlist[counterSong] : selectedSong;

  return (
    <Grid layout="container" widthMax={'1400px'} padding={'clamp(40px, 8vw, 60px) 20px 40px 20px'}>
      <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin={'0'}>
        Tunes
      </TextBox>
      <TextBox tag="p" desktopSize={12} mobileSize={12} fontWeight={500} margin={'0 0 30px 0'}>
        Music source: <b>Free Music Archive</b>
      </TextBox>

      <Grid layout="container" widthMax={'1400px'} minHeight={'180px'} loading={isLoading}>
        <AudioVisualizer song={song} setCounterSong={setCounterSong} playlistLength={playlist.length} />
      </Grid>

      <Grid margin={'30px 0 0 0'} layout="container" widthMax={'1400px'} minHeight="200px" loading={isLoading}>
        <TextBox tag="p" desktopSize={32} mobileSize={24} fontWeight={500} margin={'0 0 10px 0'}>
          Playlist
        </TextBox>

        <ol
          style={{
            paddingLeft: '30px',
            fontFamily:
              '-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Cantarell,Ubuntu,roboto,noto,arial,sans-serif',
          }}
        >
          {playlist?.map((song) => (
            <li
              style={{ cursor: 'pointer' }}
              key={song.id}
              onClick={() => {
                setSelectedSong(song);
                setCounterSong(song.id - 1);
              }}
            >
              <Grid
                minHeight="auto"
                layout="flex"
                flexWrap="nowrap"
                justifyContent="flexstart"
                alignItems="center"
                widthMax={'1400px'}
                gap={{ col: '10px', row: '0px' }}
                margin={'0 0 10px'}
              >
                <TextBox tag="p" desktopSize={18} mobileSize={18} fontWeight={400}>
                  {counterSong == song.id - 1 ? (
                    <u>
                      <b>{song.author}</b> -{' '}
                      <i>
                        {song.name}, {song.licence}
                      </i>
                    </u>
                  ) : (
                    <>
                      <b>{song.author}</b> -{' '}
                      <i>
                        {song.name}, {song.licence}
                      </i>
                    </>
                  )}
                </TextBox>
              </Grid>
            </li>
          ))}
        </ol>
      </Grid>
    </Grid>
  );
};
