import Badge from 'UI/Badge';
import Card from 'UI/Card';
import Stack from 'UI/Stack';

type JobPositionProps = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[],
  onBadgeClick: (data: string) => void,
}


export default function JobPosition ({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onBadgeClick
}: JobPositionProps) {
  const badges = [role, level].concat(...languages, ...tools);

  return (
    <Card isFeatured={featured}>
      <div className='job-position'>
        <div className='job-position-info'>
          <img
            className='job-position-avatar'
            src={process.env.PUBLIC_URL + logo.slice(1)}
            alt={company}
          />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className='job-position-title'>
              {position}
            </h2>
            <Stack>
              <div className='job-position-meta'>
                {postedAt}
              </div>
              <div className='job-position-meta'>
                {contract}
              </div>
              <div className='job-position-meta'>
                {location}
              </div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map(item => (
            <Badge key={item} onClick={() => onBadgeClick(item)}>{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  )
}