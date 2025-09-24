# Profile ID Reference

This file maps the random profile IDs to retiree names for administrative purposes.

## Profile Mappings

| Random ID | Retiree Name | Has Photo |
|-----------|--------------|-----------|
| `k8m3x9p2` | Christian Klint M. Labadia | ✅ Yes |
| `f7n4w6z1` | Maria Elena Santos | ❌ No |
| `q5j8r3v9` | Robert P. Garcia | ✅ Yes |
| `h2d7m5x4` | Ana Marie Rodriguez | ✅ Yes |

## QR Code URLs

```
Base URL: https://your-site.github.io/retiree-profile/

Christian: ?profile=k8m3x9p2
Maria:     ?profile=f7n4w6z1
Robert:    ?profile=q5j8r3v9
Ana:       ?profile=h2d7m5x4
```

## Security Benefits

- ✅ **Non-guessable**: Random 8-character alphanumeric strings
- ✅ **Privacy**: Names not exposed in URLs
- ✅ **Scalable**: Easy to generate new IDs for additional profiles
- ✅ **QR-friendly**: Short enough for QR codes, long enough for security

## Adding New Profiles

1. Generate new 8-character random ID (letters + numbers)
2. Add entry to `retireeData.json` with new ID as key
3. Update this reference file
4. Generate QR code with new URL

## ID Generation Pattern

- **Length**: 8 characters
- **Characters**: Lowercase letters (a-z) + numbers (0-9)
- **Avoid**: Ambiguous characters (0/O, 1/l, etc.)
- **Example**: `k8m3x9p2`, `f7n4w6z1`